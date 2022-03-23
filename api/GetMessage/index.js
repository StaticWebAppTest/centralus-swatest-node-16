module.exports = async function (context, req) {
  const date = "2022-03-23T12:18:06.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

