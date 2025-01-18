module.exports = async function (context, req) {
  const date = "2025-01-18T17:08:50.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

