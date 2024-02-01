module.exports = async function (context, req) {
  const date = "2024-02-01T15:08:30.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

