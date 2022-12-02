module.exports = async function (context, req) {
  const date = "2022-12-02T07:09:20.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

