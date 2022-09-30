module.exports = async function (context, req) {
  const date = "2022-09-30T20:14:09.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

