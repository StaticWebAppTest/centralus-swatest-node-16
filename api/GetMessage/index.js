module.exports = async function (context, req) {
  const date = "2023-02-28T07:09:41.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

