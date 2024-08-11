module.exports = async function (context, req) {
  const date = "2024-08-11T20:10:50.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

