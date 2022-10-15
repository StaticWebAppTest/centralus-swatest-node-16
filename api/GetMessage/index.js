module.exports = async function (context, req) {
  const date = "2022-10-15T23:13:55.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

