module.exports = async function (context, req) {
  const date = "2024-11-21T12:24:03.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

