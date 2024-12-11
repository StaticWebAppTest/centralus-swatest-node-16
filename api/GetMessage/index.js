module.exports = async function (context, req) {
  const date = "2024-12-11T16:16:15.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

