module.exports = async function (context, req) {
  const date = "2025-06-27T14:13:14.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

