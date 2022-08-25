module.exports = async function (context, req) {
  const date = "2022-08-25T19:09:01.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

