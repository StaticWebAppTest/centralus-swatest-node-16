module.exports = async function (context, req) {
  const date = "2024-06-07T04:13:09.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

