module.exports = async function (context, req) {
  const date = "2023-05-31T18:11:10.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

