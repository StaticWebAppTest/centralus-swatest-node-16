module.exports = async function (context, req) {
  const date = "2023-05-07T02:07:12.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

