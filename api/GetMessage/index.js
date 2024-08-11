module.exports = async function (context, req) {
  const date = "2024-08-11T23:09:43.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

