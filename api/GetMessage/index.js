module.exports = async function (context, req) {
  const date = "2024-01-12T23:08:10.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

