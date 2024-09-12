module.exports = async function (context, req) {
  const date = "2024-09-12T04:14:29.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

