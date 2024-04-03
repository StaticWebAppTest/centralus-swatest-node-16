module.exports = async function (context, req) {
  const date = "2024-04-03T10:10:18.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

