module.exports = async function (context, req) {
  const date = "2022-06-17T23:10:00.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

