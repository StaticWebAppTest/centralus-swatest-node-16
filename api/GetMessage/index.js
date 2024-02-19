module.exports = async function (context, req) {
  const date = "2024-02-19T14:09:36.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

