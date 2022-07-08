module.exports = async function (context, req) {
  const date = "2022-07-08T16:17:05.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

