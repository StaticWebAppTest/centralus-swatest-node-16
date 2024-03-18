module.exports = async function (context, req) {
  const date = "2024-03-18T21:09:56.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

