module.exports = async function (context, req) {
  const date = "2022-12-31T06:11:30.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

