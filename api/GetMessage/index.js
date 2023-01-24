module.exports = async function (context, req) {
  const date = "2023-01-24T12:18:42.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

