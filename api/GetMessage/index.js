module.exports = async function (context, req) {
  const date = "2023-10-25T01:43:00.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

