module.exports = async function (context, req) {
  const date = "2025-11-27T10:15:21.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

