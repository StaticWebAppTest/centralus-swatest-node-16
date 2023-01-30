module.exports = async function (context, req) {
  const date = "2023-01-30T15:10:01.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

