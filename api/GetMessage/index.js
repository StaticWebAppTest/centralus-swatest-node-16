module.exports = async function (context, req) {
  const date = "2024-06-24T11:10:34.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

