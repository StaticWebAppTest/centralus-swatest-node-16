module.exports = async function (context, req) {
  const date = "2023-12-04T06:13:00.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

