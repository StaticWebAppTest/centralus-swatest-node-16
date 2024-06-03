module.exports = async function (context, req) {
  const date = "2024-06-03T04:14:12.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

