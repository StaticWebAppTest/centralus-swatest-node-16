module.exports = async function (context, req) {
  const date = "2022-04-06T18:13:00.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

