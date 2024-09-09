module.exports = async function (context, req) {
  const date = "2024-09-09T16:13:40.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

