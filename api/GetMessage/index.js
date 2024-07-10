module.exports = async function (context, req) {
  const date = "2024-07-10T07:11:28.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

