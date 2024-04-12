module.exports = async function (context, req) {
  const date = "2024-04-12T04:10:56.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

