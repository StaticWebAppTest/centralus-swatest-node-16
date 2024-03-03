module.exports = async function (context, req) {
  const date = "2024-03-03T09:09:13.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

