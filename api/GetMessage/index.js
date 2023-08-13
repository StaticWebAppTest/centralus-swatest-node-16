module.exports = async function (context, req) {
  const date = "2023-08-13T03:08:20.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

