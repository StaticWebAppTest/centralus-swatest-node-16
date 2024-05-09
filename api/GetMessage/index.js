module.exports = async function (context, req) {
  const date = "2024-05-09T07:11:16.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

