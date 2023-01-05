module.exports = async function (context, req) {
  const date = "2023-01-05T20:10:19.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

