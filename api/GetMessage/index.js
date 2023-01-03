module.exports = async function (context, req) {
  const date = "2023-01-03T20:10:02.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

