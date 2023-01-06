module.exports = async function (context, req) {
  const date = "2023-01-06T08:12:13.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

