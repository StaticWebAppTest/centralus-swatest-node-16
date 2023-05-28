module.exports = async function (context, req) {
  const date = "2023-05-28T02:13:18.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

