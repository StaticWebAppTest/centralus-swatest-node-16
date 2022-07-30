module.exports = async function (context, req) {
  const date = "2022-07-30T14:09:39.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

