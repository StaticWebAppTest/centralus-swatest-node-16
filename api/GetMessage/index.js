module.exports = async function (context, req) {
  const date = "2022-09-03T13:24:03.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

