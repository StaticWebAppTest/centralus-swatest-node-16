module.exports = async function (context, req) {
  const date = "2023-08-09T12:18:04.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

