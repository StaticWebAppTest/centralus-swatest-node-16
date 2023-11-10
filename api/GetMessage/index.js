module.exports = async function (context, req) {
  const date = "2023-11-10T14:08:22.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

