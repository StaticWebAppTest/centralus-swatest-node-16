module.exports = async function (context, req) {
  const date = "2025-03-22T12:21:03.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

