module.exports = async function (context, req) {
  const date = "2023-01-02T08:12:45.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

