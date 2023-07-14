module.exports = async function (context, req) {
  const date = "2023-07-14T21:08:22.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

