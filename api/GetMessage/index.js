module.exports = async function (context, req) {
  const date = "2025-03-25T14:13:15.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

