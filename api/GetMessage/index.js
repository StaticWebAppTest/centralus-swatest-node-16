module.exports = async function (context, req) {
  const date = "2024-11-03T17:09:47.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

