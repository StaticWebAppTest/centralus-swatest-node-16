module.exports = async function (context, req) {
  const date = "2022-09-09T15:12:51.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

