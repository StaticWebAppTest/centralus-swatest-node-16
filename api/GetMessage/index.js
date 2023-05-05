module.exports = async function (context, req) {
  const date = "2023-05-05T19:07:06.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

