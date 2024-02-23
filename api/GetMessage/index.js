module.exports = async function (context, req) {
  const date = "2024-02-23T23:08:22.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

