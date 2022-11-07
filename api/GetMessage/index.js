module.exports = async function (context, req) {
  const date = "2022-11-07T08:17:08.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

