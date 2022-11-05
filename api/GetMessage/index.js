module.exports = async function (context, req) {
  const date = "2022-11-05T19:08:42.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

