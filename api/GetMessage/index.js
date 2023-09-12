module.exports = async function (context, req) {
  const date = "2023-09-12T20:09:25.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

