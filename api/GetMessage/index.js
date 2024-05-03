module.exports = async function (context, req) {
  const date = "2024-05-03T19:07:44.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

