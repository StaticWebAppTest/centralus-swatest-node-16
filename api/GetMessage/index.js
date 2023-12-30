module.exports = async function (context, req) {
  const date = "2023-12-30T02:18:58.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

