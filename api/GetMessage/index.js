module.exports = async function (context, req) {
  const date = "2022-09-22T15:12:54.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

