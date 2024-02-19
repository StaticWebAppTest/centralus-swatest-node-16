module.exports = async function (context, req) {
  const date = "2024-02-19T03:10:11.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

