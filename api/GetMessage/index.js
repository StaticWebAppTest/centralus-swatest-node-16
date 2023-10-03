module.exports = async function (context, req) {
  const date = "2023-10-03T22:07:49.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

