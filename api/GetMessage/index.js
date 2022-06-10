module.exports = async function (context, req) {
  const date = "2022-06-10T22:09:52.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

