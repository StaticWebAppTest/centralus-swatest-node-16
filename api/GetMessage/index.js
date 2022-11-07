module.exports = async function (context, req) {
  const date = "2022-11-07T01:00:33.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

