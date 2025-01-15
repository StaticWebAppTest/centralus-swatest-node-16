module.exports = async function (context, req) {
  const date = "2025-01-15T04:13:57.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

