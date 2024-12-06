module.exports = async function (context, req) {
  const date = "2024-12-06T07:12:30.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

