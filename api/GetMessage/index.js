module.exports = async function (context, req) {
  const date = "2022-04-30T17:12:55.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

