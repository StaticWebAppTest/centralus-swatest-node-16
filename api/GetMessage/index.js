module.exports = async function (context, req) {
  const date = "2023-03-28T02:05:30.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

