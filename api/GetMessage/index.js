module.exports = async function (context, req) {
  const date = "2023-12-26T04:11:15.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

