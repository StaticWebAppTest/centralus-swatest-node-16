module.exports = async function (context, req) {
  const date = "2022-09-10T22:11:15.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

