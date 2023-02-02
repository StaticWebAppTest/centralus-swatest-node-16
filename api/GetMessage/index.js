module.exports = async function (context, req) {
  const date = "2023-02-02T06:12:40.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

