module.exports = async function (context, req) {
  const date = "2025-05-30T13:25:06.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

