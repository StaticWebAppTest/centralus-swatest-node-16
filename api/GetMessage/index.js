module.exports = async function (context, req) {
  const date = "2025-11-22T04:15:33.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

