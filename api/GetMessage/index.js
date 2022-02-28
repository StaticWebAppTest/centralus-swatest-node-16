module.exports = async function (context, req) {
  const date = "2022-02-28T22:09:54.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

