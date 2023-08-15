module.exports = async function (context, req) {
  const date = "2023-08-15T16:10:32.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

