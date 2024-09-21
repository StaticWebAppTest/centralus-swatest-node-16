module.exports = async function (context, req) {
  const date = "2024-09-21T08:13:22.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

