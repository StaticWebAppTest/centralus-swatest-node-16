module.exports = async function (context, req) {
  const date = "2022-06-22T01:02:55.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

