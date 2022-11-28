module.exports = async function (context, req) {
  const date = "2022-11-28T22:10:00.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

