module.exports = async function (context, req) {
  const date = "2024-01-21T13:10:57.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

