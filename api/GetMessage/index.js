module.exports = async function (context, req) {
  const date = "2024-05-09T11:08:43.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

