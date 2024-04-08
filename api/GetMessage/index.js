module.exports = async function (context, req) {
  const date = "2024-04-08T16:12:38.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

