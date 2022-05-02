module.exports = async function (context, req) {
  const date = "2022-05-02T21:13:11.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

