module.exports = async function (context, req) {
  const date = "2022-08-10T20:11:37.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

