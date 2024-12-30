module.exports = async function (context, req) {
  const date = "2024-12-30T16:13:43.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

