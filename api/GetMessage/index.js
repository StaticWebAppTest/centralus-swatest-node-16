module.exports = async function (context, req) {
  const date = "2024-02-23T04:10:29.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

