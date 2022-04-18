module.exports = async function (context, req) {
  const date = "2022-04-18T07:10:49.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

