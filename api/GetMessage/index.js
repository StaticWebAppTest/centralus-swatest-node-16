module.exports = async function (context, req) {
  const date = "2023-12-11T04:12:11.664Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

