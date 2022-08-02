module.exports = async function (context, req) {
  const date = "2022-08-02T12:25:50.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

