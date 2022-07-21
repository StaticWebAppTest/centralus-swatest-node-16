module.exports = async function (context, req) {
  const date = "2022-07-21T13:34:17.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

