module.exports = async function (context, req) {
  const date = "2023-09-20T12:16:42.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

