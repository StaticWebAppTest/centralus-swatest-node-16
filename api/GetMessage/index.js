module.exports = async function (context, req) {
  const date = "2022-08-02T10:13:16.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

