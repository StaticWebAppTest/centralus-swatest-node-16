module.exports = async function (context, req) {
  const date = "2022-05-10T06:13:55.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

