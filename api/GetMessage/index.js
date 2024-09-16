module.exports = async function (context, req) {
  const date = "2024-09-16T04:14:24.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

