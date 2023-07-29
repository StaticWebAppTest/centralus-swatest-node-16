module.exports = async function (context, req) {
  const date = "2023-07-29T02:21:43.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

