module.exports = async function (context, req) {
  const date = "2024-12-12T20:14:09.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

