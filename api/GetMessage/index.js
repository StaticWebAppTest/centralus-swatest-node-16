module.exports = async function (context, req) {
  const date = "2023-09-09T05:07:33.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

