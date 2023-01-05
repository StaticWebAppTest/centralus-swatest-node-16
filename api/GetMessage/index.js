module.exports = async function (context, req) {
  const date = "2023-01-05T23:10:36.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

