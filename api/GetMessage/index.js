module.exports = async function (context, req) {
  const date = "2022-12-14T12:18:52.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

