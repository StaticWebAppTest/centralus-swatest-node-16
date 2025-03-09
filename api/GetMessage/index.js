module.exports = async function (context, req) {
  const date = "2025-03-09T06:13:15.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

