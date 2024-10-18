module.exports = async function (context, req) {
  const date = "2024-10-18T13:20:02.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

