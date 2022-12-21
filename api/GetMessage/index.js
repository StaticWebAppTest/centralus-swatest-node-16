module.exports = async function (context, req) {
  const date = "2022-12-21T14:08:52.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

