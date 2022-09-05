module.exports = async function (context, req) {
  const date = "2022-09-05T17:17:03.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

