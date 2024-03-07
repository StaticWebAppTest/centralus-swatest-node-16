module.exports = async function (context, req) {
  const date = "2024-03-07T16:10:40.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

