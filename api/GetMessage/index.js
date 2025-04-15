module.exports = async function (context, req) {
  const date = "2025-04-15T11:11:05.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

