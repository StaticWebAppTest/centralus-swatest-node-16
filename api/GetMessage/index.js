module.exports = async function (context, req) {
  const date = "2024-12-15T06:16:52.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

