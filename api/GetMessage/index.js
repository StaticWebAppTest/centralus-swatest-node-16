module.exports = async function (context, req) {
  const date = "2022-11-08T16:15:53.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

