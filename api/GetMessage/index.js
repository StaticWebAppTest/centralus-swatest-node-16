module.exports = async function (context, req) {
  const date = "2024-05-24T03:11:16.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

