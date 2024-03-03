module.exports = async function (context, req) {
  const date = "2024-03-03T11:06:49.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

