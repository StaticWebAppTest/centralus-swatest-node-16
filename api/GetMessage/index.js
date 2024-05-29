module.exports = async function (context, req) {
  const date = "2024-05-29T08:13:26.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

