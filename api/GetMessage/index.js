module.exports = async function (context, req) {
  const date = "2023-01-13T00:52:00.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

