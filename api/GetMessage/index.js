module.exports = async function (context, req) {
  const date = "2024-09-05T08:14:38.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

