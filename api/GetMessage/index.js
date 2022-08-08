module.exports = async function (context, req) {
  const date = "2022-08-08T13:36:13.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

