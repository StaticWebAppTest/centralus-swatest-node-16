module.exports = async function (context, req) {
  const date = "2022-04-21T02:58:29.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

