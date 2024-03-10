module.exports = async function (context, req) {
  const date = "2024-03-10T23:09:28.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

