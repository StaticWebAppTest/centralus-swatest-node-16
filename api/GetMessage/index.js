module.exports = async function (context, req) {
  const date = "2022-07-27T15:12:38.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

