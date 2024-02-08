module.exports = async function (context, req) {
  const date = "2024-02-08T03:10:30.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

