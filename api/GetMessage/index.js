module.exports = async function (context, req) {
  const date = "2023-04-06T20:09:04.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

