module.exports = async function (context, req) {
  const date = "2022-06-19T23:09:36.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

