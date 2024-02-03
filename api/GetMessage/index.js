module.exports = async function (context, req) {
  const date = "2024-02-03T09:08:44.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

