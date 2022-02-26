module.exports = async function (context, req) {
  const date = "2022-02-26T23:10:00.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

