module.exports = async function (context, req) {
  const date = "2025-06-03T12:27:50.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

