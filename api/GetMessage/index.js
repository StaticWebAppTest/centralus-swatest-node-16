module.exports = async function (context, req) {
  const date = "2024-08-08T06:15:45.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

