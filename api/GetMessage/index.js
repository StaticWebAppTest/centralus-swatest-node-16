module.exports = async function (context, req) {
  const date = "2024-03-27T20:10:02.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

