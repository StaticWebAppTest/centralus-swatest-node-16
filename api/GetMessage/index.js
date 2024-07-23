module.exports = async function (context, req) {
  const date = "2024-07-23T21:12:17.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

