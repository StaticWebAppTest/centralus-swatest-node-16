module.exports = async function (context, req) {
  const date = "2022-11-10T19:09:35.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

