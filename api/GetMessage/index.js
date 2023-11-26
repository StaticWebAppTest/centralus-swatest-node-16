module.exports = async function (context, req) {
  const date = "2023-11-26T05:08:08.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

