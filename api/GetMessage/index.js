module.exports = async function (context, req) {
  const date = "2023-05-14T02:04:22.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

