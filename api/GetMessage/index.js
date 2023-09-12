module.exports = async function (context, req) {
  const date = "2023-09-12T19:06:54.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

