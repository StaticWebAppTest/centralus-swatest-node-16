module.exports = async function (context, req) {
  const date = "2024-08-04T15:10:34.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

