module.exports = async function (context, req) {
  const date = "2024-05-21T08:12:54.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

