module.exports = async function (context, req) {
  const date = "2024-07-13T02:31:32.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

