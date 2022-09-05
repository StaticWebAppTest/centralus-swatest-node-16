module.exports = async function (context, req) {
  const date = "2022-09-05T15:12:18.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

