module.exports = async function (context, req) {
  const date = "2023-10-26T22:07:53.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

