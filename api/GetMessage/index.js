module.exports = async function (context, req) {
  const date = "2023-11-11T20:08:25.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

