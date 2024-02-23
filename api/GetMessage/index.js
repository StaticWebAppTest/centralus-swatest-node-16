module.exports = async function (context, req) {
  const date = "2024-02-23T17:07:51.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

