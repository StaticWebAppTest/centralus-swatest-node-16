module.exports = async function (context, req) {
  const date = "2023-11-24T14:08:22.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

