module.exports = async function (context, req) {
  const date = "2024-11-18T21:10:00.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

