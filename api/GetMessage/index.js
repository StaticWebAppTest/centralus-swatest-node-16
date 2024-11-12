module.exports = async function (context, req) {
  const date = "2024-11-12T03:14:06.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

