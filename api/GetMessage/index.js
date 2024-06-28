module.exports = async function (context, req) {
  const date = "2024-06-28T01:57:24.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

