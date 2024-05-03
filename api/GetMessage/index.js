module.exports = async function (context, req) {
  const date = "2024-05-03T16:12:34.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

