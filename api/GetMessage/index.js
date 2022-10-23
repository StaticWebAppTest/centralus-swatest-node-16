module.exports = async function (context, req) {
  const date = "2022-10-23T19:13:36.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

