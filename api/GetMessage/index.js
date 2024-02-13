module.exports = async function (context, req) {
  const date = "2024-02-13T02:15:30.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

