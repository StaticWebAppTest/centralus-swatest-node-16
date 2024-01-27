module.exports = async function (context, req) {
  const date = "2024-01-27T17:10:00.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

