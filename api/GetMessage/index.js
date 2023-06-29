module.exports = async function (context, req) {
  const date = "2023-06-29T05:10:00.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

