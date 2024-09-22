module.exports = async function (context, req) {
  const date = "2024-09-22T21:10:02.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

