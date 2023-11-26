module.exports = async function (context, req) {
  const date = "2023-11-26T08:10:58.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

