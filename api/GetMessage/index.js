module.exports = async function (context, req) {
  const date = "2025-03-04T12:23:48.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

