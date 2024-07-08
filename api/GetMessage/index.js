module.exports = async function (context, req) {
  const date = "2024-07-08T13:13:35.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

