module.exports = async function (context, req) {
  const date = "2024-01-08T06:12:59.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

