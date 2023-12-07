module.exports = async function (context, req) {
  const date = "2023-12-07T20:10:04.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

