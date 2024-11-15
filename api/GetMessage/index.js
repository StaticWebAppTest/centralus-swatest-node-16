module.exports = async function (context, req) {
  const date = "2024-11-15T16:14:57.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

