module.exports = async function (context, req) {
  const date = "2024-01-03T11:08:02.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

