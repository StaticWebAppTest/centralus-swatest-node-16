module.exports = async function (context, req) {
  const date = "2024-10-24T15:12:42.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

