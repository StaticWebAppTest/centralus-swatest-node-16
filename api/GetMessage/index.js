module.exports = async function (context, req) {
  const date = "2022-08-22T01:01:34.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

