module.exports = async function (context, req) {
  const date = "2023-12-01T06:13:02.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

