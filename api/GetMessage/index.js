module.exports = async function (context, req) {
  const date = "2022-08-23T23:11:01.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

