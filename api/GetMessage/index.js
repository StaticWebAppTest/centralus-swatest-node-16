module.exports = async function (context, req) {
  const date = "2022-12-24T05:08:22.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

