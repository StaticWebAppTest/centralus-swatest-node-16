module.exports = async function (context, req) {
  const date = "2024-09-11T23:11:12.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

