module.exports = async function (context, req) {
  const date = "2022-04-28T16:21:15.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

