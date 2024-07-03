module.exports = async function (context, req) {
  const date = "2024-07-03T12:19:26.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

