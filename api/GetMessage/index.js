module.exports = async function (context, req) {
  const date = "2024-12-27T12:21:38.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

