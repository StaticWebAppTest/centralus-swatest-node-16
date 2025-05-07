module.exports = async function (context, req) {
  const date = "2025-05-07T12:28:05.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

