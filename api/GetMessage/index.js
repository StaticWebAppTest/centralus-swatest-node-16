module.exports = async function (context, req) {
  const date = "2024-01-28T17:10:04.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

