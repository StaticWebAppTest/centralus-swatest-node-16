module.exports = async function (context, req) {
  const date = "2023-05-26T12:16:10.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

