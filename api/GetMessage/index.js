module.exports = async function (context, req) {
  const date = "2024-11-30T16:13:32.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

