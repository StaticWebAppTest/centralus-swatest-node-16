module.exports = async function (context, req) {
  const date = "2024-12-05T09:13:43.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

