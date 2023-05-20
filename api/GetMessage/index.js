module.exports = async function (context, req) {
  const date = "2023-05-20T15:07:38.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

