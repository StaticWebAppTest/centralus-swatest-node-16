module.exports = async function (context, req) {
  const date = "2023-01-10T11:08:38.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

