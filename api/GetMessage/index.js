module.exports = async function (context, req) {
  const date = "2022-10-17T15:17:39.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

