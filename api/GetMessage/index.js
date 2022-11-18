module.exports = async function (context, req) {
  const date = "2022-11-18T01:02:39.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

