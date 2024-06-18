module.exports = async function (context, req) {
  const date = "2024-06-18T14:09:35.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

