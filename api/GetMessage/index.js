module.exports = async function (context, req) {
  const date = "2022-08-12T10:13:04.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

