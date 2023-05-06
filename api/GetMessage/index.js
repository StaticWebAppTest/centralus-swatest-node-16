module.exports = async function (context, req) {
  const date = "2023-05-06T10:08:54.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

