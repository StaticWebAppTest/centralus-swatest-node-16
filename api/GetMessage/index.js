module.exports = async function (context, req) {
  const date = "2023-08-26T22:07:17.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

