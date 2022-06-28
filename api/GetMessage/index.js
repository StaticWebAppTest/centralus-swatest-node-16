module.exports = async function (context, req) {
  const date = "2022-06-28T15:11:22.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

