module.exports = async function (context, req) {
  const date = "2023-06-07T02:25:24.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

