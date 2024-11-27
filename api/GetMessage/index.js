module.exports = async function (context, req) {
  const date = "2024-11-27T12:24:32.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

