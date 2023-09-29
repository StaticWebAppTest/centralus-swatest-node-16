module.exports = async function (context, req) {
  const date = "2023-09-29T03:09:05.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

