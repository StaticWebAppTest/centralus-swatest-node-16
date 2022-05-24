module.exports = async function (context, req) {
  const date = "2022-05-24T01:01:48.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

