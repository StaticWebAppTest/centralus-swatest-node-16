module.exports = async function (context, req) {
  const date = "2025-03-27T02:54:29.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

