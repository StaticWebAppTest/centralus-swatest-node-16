module.exports = async function (context, req) {
  const date = "2024-06-08T20:09:34.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

