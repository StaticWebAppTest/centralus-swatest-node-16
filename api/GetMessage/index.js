module.exports = async function (context, req) {
  const date = "2022-08-05T13:36:03.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

