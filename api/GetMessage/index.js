module.exports = async function (context, req) {
  const date = "2024-03-24T20:08:37.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

