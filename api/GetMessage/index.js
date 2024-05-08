module.exports = async function (context, req) {
  const date = "2024-05-08T19:07:47.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

