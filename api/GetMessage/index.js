module.exports = async function (context, req) {
  const date = "2025-09-27T14:10:18.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

