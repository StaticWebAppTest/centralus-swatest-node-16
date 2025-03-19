module.exports = async function (context, req) {
  const date = "2025-03-19T12:24:27.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

