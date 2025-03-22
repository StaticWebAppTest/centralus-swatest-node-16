module.exports = async function (context, req) {
  const date = "2025-03-22T21:10:45.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

