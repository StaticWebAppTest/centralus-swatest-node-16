module.exports = async function (context, req) {
  const date = "2022-06-23T20:11:29.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

