module.exports = async function (context, req) {
  const date = "2025-07-27T17:12:07.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

