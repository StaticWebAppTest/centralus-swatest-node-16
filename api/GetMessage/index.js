module.exports = async function (context, req) {
  const date = "2023-02-08T03:13:30.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

