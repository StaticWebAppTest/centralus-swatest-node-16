module.exports = async function (context, req) {
  const date = "2023-10-01T01:54:29.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

