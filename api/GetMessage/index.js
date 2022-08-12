module.exports = async function (context, req) {
  const date = "2022-08-12T15:12:28.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

