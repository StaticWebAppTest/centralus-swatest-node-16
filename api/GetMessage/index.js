module.exports = async function (context, req) {
  const date = "2023-03-29T02:13:53.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

