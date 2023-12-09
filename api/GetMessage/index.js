module.exports = async function (context, req) {
  const date = "2023-12-09T23:08:36.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

