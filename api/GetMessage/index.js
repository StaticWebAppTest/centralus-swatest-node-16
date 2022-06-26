module.exports = async function (context, req) {
  const date = "2022-06-26T09:09:41.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

