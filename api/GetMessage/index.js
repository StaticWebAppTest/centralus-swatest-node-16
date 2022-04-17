module.exports = async function (context, req) {
  const date = "2022-04-17T10:10:49.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

