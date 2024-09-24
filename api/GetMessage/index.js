module.exports = async function (context, req) {
  const date = "2024-09-24T12:22:10.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

