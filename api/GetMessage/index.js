module.exports = async function (context, req) {
  const date = "2024-01-27T07:08:17.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

