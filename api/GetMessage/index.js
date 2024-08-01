module.exports = async function (context, req) {
  const date = "2024-08-01T04:13:11.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

