module.exports = async function (context, req) {
  const date = "2022-10-02T23:13:43.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

