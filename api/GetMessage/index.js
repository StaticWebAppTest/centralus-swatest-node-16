module.exports = async function (context, req) {
  const date = "2023-09-17T13:08:38.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

