module.exports = async function (context, req) {
  const date = "2025-03-27T12:25:15.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

