module.exports = async function (context, req) {
  const date = "2022-07-20T22:10:40.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

