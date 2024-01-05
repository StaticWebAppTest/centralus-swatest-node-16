module.exports = async function (context, req) {
  const date = "2024-01-05T02:23:03.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

