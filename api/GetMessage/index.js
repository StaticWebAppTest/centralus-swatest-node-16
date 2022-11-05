module.exports = async function (context, req) {
  const date = "2022-11-05T09:11:15.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

