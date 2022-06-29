module.exports = async function (context, req) {
  const date = "2022-06-29T08:15:47.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

