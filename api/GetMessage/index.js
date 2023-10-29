module.exports = async function (context, req) {
  const date = "2023-10-29T02:18:06.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

