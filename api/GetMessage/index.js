module.exports = async function (context, req) {
  const date = "2022-07-10T19:08:03.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

