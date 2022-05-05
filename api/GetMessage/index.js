module.exports = async function (context, req) {
  const date = "2022-05-05T16:19:17.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

