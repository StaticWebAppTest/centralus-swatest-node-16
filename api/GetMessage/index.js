module.exports = async function (context, req) {
  const date = "2022-12-24T04:11:16.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

