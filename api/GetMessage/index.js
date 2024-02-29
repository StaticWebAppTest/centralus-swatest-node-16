module.exports = async function (context, req) {
  const date = "2024-02-29T16:10:39.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

