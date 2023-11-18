module.exports = async function (context, req) {
  const date = "2023-11-18T23:08:22.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

