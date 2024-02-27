module.exports = async function (context, req) {
  const date = "2024-02-27T19:07:36.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

