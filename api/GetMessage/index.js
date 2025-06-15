module.exports = async function (context, req) {
  const date = "2025-06-15T06:18:11.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

