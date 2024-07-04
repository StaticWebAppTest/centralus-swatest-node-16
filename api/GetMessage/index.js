module.exports = async function (context, req) {
  const date = "2024-07-04T16:12:17.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

