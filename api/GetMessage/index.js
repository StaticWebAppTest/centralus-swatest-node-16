module.exports = async function (context, req) {
  const date = "2025-03-22T14:11:56.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

