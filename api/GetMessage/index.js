module.exports = async function (context, req) {
  const date = "2023-06-03T03:08:30.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

