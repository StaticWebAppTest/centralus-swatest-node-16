module.exports = async function (context, req) {
  const date = "2022-07-20T15:12:01.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

