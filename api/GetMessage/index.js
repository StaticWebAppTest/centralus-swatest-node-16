module.exports = async function (context, req) {
  const date = "2024-11-18T11:10:51.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

