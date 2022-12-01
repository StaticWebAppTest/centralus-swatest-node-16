module.exports = async function (context, req) {
  const date = "2022-12-01T23:10:35.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

