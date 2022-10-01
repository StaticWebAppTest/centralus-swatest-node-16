module.exports = async function (context, req) {
  const date = "2022-10-01T23:14:14.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

