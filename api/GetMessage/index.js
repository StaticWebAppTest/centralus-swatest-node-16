module.exports = async function (context, req) {
  const date = "2025-12-10T12:30:17.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

