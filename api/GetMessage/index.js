module.exports = async function (context, req) {
  const date = "2023-05-29T02:07:44.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

