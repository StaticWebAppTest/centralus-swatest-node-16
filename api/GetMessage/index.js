module.exports = async function (context, req) {
  const date = "2023-11-01T16:11:31.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

