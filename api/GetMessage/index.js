module.exports = async function (context, req) {
  const date = "2024-07-05T23:10:30.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

