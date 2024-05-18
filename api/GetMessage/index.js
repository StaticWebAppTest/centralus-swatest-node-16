module.exports = async function (context, req) {
  const date = "2024-05-18T01:50:19.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

