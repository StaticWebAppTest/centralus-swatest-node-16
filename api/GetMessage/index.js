module.exports = async function (context, req) {
  const date = "2023-04-05T08:12:39.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

