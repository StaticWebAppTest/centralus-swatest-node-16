module.exports = async function (context, req) {
  const date = "2023-11-13T01:50:50.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

