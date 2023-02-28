module.exports = async function (context, req) {
  const date = "2023-02-28T08:13:39.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

