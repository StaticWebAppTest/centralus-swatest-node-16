module.exports = async function (context, req) {
  const date = "2022-04-07T18:12:20.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

