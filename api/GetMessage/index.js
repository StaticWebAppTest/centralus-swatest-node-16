module.exports = async function (context, req) {
  const date = "2022-12-16T23:08:56.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

