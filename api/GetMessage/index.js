module.exports = async function (context, req) {
  const date = "2023-03-17T03:10:15.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

