module.exports = async function (context, req) {
  const date = "2025-01-24T06:16:17.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

