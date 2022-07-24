module.exports = async function (context, req) {
  const date = "2022-07-24T15:10:41.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

