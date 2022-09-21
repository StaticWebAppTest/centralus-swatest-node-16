module.exports = async function (context, req) {
  const date = "2022-09-21T01:12:59.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

