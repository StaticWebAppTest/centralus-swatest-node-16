module.exports = async function (context, req) {
  const date = "2022-04-25T21:09:22.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

