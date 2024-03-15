module.exports = async function (context, req) {
  const date = "2024-03-15T21:07:26.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

