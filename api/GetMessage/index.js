module.exports = async function (context, req) {
  const date = "2023-01-11T06:12:33.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

