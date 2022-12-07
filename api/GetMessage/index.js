module.exports = async function (context, req) {
  const date = "2022-12-07T18:12:02.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

