module.exports = async function (context, req) {
  const date = "2024-03-09T10:10:13.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

