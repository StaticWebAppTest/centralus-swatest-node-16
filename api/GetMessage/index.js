module.exports = async function (context, req) {
  const date = "2024-11-08T20:12:18.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

