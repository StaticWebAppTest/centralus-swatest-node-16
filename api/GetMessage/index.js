module.exports = async function (context, req) {
  const date = "2024-02-06T01:40:45.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

