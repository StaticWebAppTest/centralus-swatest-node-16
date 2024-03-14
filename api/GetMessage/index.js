module.exports = async function (context, req) {
  const date = "2024-03-14T06:11:49.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

