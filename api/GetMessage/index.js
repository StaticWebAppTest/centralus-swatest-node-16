module.exports = async function (context, req) {
  const date = "2024-04-10T11:10:04.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

