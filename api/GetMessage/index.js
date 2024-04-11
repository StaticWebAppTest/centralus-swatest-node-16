module.exports = async function (context, req) {
  const date = "2024-04-11T08:12:04.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

