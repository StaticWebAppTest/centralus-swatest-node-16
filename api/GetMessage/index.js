module.exports = async function (context, req) {
  const date = "2023-08-21T10:09:42.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

