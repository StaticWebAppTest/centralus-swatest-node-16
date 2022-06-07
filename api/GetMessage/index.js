module.exports = async function (context, req) {
  const date = "2022-06-07T12:22:56.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

