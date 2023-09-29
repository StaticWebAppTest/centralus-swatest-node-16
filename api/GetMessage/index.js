module.exports = async function (context, req) {
  const date = "2023-09-29T02:16:06.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

