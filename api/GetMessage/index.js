module.exports = async function (context, req) {
  const date = "2024-01-21T03:10:03.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

