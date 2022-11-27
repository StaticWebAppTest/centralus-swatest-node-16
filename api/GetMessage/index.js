module.exports = async function (context, req) {
  const date = "2022-11-27T20:10:05.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

