module.exports = async function (context, req) {
  const date = "2023-02-09T00:50:51.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

