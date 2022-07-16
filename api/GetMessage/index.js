module.exports = async function (context, req) {
  const date = "2022-07-16T20:10:37.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

