module.exports = async function (context, req) {
  const date = "2022-03-10T13:17:09.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

