module.exports = async function (context, req) {
  const date = "2023-03-26T02:09:26.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

