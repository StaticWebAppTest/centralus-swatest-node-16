module.exports = async function (context, req) {
  const date = "2024-01-02T23:08:45.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

