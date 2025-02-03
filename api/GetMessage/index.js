module.exports = async function (context, req) {
  const date = "2025-02-03T21:10:38.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

