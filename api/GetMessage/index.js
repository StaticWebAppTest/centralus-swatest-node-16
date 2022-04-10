module.exports = async function (context, req) {
  const date = "2022-04-10T19:08:24.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

