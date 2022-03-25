module.exports = async function (context, req) {
  const date = "2022-03-25T02:15:52.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

