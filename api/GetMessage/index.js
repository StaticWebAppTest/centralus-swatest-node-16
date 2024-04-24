module.exports = async function (context, req) {
  const date = "2024-04-24T22:10:12.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

