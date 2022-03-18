module.exports = async function (context, req) {
  const date = "2022-03-18T07:10:04.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

