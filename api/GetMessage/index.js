module.exports = async function (context, req) {
  const date = "2024-01-23T01:54:57.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

