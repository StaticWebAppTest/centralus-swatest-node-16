module.exports = async function (context, req) {
  const date = "2022-11-28T15:09:48.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

