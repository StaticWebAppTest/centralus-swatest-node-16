module.exports = async function (context, req) {
  const date = "2024-07-01T14:09:36.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

