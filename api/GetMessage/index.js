module.exports = async function (context, req) {
  const date = "2022-08-21T23:10:32.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

