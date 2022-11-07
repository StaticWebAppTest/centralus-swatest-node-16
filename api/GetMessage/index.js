module.exports = async function (context, req) {
  const date = "2022-11-07T16:15:32.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

