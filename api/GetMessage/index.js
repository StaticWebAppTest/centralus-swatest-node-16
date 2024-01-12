module.exports = async function (context, req) {
  const date = "2024-01-12T16:11:43.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

