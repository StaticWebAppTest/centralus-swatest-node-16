module.exports = async function (context, req) {
  const date = "2023-04-15T16:10:35.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

