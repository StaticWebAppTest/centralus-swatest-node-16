module.exports = async function (context, req) {
  const date = "2023-01-04T06:12:22.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

