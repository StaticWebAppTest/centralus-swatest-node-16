module.exports = async function (context, req) {
  const date = "2022-03-05T09:08:58.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

