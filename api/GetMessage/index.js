module.exports = async function (context, req) {
  const date = "2022-07-25T23:10:34.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

