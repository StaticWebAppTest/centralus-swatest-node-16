module.exports = async function (context, req) {
  const date = "2025-03-18T14:12:17.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

