module.exports = async function (context, req) {
  const date = "2023-02-16T20:10:34.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

