module.exports = async function (context, req) {
  const date = "2023-12-08T19:07:19.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

