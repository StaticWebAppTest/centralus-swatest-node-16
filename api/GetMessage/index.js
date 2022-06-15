module.exports = async function (context, req) {
  const date = "2022-06-15T23:10:54.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

