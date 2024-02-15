module.exports = async function (context, req) {
  const date = "2024-02-15T13:09:39.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

