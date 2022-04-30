module.exports = async function (context, req) {
  const date = "2022-04-30T00:59:01.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

