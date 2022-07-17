module.exports = async function (context, req) {
  const date = "2022-07-17T19:08:43.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

