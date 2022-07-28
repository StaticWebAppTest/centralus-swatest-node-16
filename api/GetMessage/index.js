module.exports = async function (context, req) {
  const date = "2022-07-28T20:12:00.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

