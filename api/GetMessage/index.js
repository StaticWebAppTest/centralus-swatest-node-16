module.exports = async function (context, req) {
  const date = "2023-12-26T19:07:10.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

