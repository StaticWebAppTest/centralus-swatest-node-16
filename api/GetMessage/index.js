module.exports = async function (context, req) {
  const date = "2022-08-10T23:10:28.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

