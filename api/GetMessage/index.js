module.exports = async function (context, req) {
  const date = "2022-04-02T06:12:31.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

