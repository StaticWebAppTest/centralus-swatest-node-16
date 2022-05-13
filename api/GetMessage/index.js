module.exports = async function (context, req) {
  const date = "2022-05-13T15:11:41.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

