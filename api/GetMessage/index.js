module.exports = async function (context, req) {
  const date = "2024-04-28T17:08:36.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

