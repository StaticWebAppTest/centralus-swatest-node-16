module.exports = async function (context, req) {
  const date = "2024-06-09T19:08:37.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

