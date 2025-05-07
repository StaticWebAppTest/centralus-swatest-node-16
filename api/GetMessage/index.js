module.exports = async function (context, req) {
  const date = "2025-05-07T14:13:40.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

