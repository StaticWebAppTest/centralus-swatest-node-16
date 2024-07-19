module.exports = async function (context, req) {
  const date = "2024-07-19T19:09:20.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

