module.exports = async function (context, req) {
  const date = "2025-03-22T23:11:45.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

