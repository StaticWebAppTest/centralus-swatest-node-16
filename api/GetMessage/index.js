module.exports = async function (context, req) {
  const date = "2024-03-09T22:08:30.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

