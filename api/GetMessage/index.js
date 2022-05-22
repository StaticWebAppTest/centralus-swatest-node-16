module.exports = async function (context, req) {
  const date = "2022-05-22T05:10:46.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

