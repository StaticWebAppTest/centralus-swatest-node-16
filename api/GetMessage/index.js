module.exports = async function (context, req) {
  const date = "2024-08-08T19:08:23.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

