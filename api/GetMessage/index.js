module.exports = async function (context, req) {
  const date = "2024-08-08T05:11:02.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

