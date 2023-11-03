module.exports = async function (context, req) {
  const date = "2023-11-03T21:06:54.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

