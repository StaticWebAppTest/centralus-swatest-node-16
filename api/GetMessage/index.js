module.exports = async function (context, req) {
  const date = "2022-06-28T04:34:47.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

