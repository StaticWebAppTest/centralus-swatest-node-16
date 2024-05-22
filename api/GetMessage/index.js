module.exports = async function (context, req) {
  const date = "2024-05-22T14:09:25.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

