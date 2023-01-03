module.exports = async function (context, req) {
  const date = "2023-01-03T17:08:25.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

