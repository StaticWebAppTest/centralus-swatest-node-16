module.exports = async function (context, req) {
  const date = "2025-03-27T21:12:05.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

