module.exports = async function (context, req) {
  const date = "2024-02-23T08:12:12.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

