module.exports = async function (context, req) {
  const date = "2022-11-08T01:00:58.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

