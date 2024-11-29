module.exports = async function (context, req) {
  const date = "2024-11-29T09:13:27.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

