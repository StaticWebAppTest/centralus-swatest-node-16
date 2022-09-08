module.exports = async function (context, req) {
  const date = "2022-09-08T19:10:54.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

