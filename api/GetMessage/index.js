module.exports = async function (context, req) {
  const date = "2022-05-10T10:12:03.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

