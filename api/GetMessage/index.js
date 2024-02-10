module.exports = async function (context, req) {
  const date = "2024-02-10T01:38:30.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

