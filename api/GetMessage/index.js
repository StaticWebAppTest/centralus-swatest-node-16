module.exports = async function (context, req) {
  const date = "2022-04-25T15:12:54.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

