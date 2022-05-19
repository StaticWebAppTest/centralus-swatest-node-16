module.exports = async function (context, req) {
  const date = "2022-05-19T13:34:30.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

