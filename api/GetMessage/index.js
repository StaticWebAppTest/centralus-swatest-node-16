module.exports = async function (context, req) {
  const date = "2022-05-02T13:35:15.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

