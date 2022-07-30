module.exports = async function (context, req) {
  const date = "2022-07-30T08:13:35.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

