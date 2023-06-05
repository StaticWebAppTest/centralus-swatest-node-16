module.exports = async function (context, req) {
  const date = "2023-06-05T20:08:39.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

