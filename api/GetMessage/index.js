module.exports = async function (context, req) {
  const date = "2023-12-08T20:10:00.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

