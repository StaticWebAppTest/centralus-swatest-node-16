module.exports = async function (context, req) {
  const date = "2023-05-08T02:01:46.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

