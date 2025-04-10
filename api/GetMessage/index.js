module.exports = async function (context, req) {
  const date = "2025-04-10T07:12:53.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

