module.exports = async function (context, req) {
  const date = "2022-06-29T16:32:19.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

