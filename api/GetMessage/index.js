module.exports = async function (context, req) {
  const date = "2023-06-18T20:08:45.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

