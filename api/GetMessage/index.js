module.exports = async function (context, req) {
  const date = "2024-04-03T17:08:04.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

