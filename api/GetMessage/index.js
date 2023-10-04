module.exports = async function (context, req) {
  const date = "2023-10-04T05:08:26.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

