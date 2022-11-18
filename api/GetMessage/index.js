module.exports = async function (context, req) {
  const date = "2022-11-18T23:10:46.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

