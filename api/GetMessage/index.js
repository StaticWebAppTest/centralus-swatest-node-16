module.exports = async function (context, req) {
  const date = "2022-06-27T06:16:04.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

