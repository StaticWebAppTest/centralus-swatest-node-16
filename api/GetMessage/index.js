module.exports = async function (context, req) {
  const date = "2023-08-31T10:09:09.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

