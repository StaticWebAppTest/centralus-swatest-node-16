module.exports = async function (context, req) {
  const date = "2022-12-01T01:00:10.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

