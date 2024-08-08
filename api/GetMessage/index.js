module.exports = async function (context, req) {
  const date = "2024-08-08T16:12:59.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

