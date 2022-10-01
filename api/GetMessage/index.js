module.exports = async function (context, req) {
  const date = "2022-10-01T15:12:49.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

