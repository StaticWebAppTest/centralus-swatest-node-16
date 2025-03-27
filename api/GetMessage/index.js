module.exports = async function (context, req) {
  const date = "2025-03-27T04:15:09.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

