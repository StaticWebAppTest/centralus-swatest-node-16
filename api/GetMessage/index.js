module.exports = async function (context, req) {
  const date = "2022-04-20T23:12:04.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

