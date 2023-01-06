module.exports = async function (context, req) {
  const date = "2023-01-06T06:12:46.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

