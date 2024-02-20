module.exports = async function (context, req) {
  const date = "2024-02-20T08:11:27.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

