module.exports = async function (context, req) {
  const date = "2024-11-09T13:14:32.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

