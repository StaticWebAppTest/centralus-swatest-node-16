module.exports = async function (context, req) {
  const date = "2023-10-31T17:08:00.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

