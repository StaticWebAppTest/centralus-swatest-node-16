module.exports = async function (context, req) {
  const date = "2022-12-07T13:18:00.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

