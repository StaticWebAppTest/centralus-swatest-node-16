module.exports = async function (context, req) {
  const date = "2022-11-01T19:10:28.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

