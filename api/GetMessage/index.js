module.exports = async function (context, req) {
  const date = "2022-07-23T23:10:20.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

