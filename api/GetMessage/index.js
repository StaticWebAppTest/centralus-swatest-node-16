module.exports = async function (context, req) {
  const date = "2025-02-28T20:13:21.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

