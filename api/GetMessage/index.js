module.exports = async function (context, req) {
  const date = "2024-05-30T20:10:56.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

