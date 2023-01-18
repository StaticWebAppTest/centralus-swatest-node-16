module.exports = async function (context, req) {
  const date = "2023-01-18T08:12:38.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

