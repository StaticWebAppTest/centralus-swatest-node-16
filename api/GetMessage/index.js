module.exports = async function (context, req) {
  const date = "2023-01-07T02:09:58.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

