module.exports = async function (context, req) {
  const date = "2023-03-30T19:06:38.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

