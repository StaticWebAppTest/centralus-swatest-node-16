module.exports = async function (context, req) {
  const date = "2022-04-24T21:09:15.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

