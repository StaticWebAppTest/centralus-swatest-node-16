module.exports = async function (context, req) {
  const date = "2022-04-28T01:11:09.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

