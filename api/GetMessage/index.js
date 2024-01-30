module.exports = async function (context, req) {
  const date = "2024-01-30T11:08:04.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

