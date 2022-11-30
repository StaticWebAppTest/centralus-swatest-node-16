module.exports = async function (context, req) {
  const date = "2022-11-30T22:10:09.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

