module.exports = async function (context, req) {
  const date = "2023-12-22T20:09:23.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

