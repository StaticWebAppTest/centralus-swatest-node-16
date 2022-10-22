module.exports = async function (context, req) {
  const date = "2022-10-22T01:16:50.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

