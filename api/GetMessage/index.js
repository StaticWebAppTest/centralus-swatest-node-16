module.exports = async function (context, req) {
  const date = "2025-01-08T20:13:03.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

