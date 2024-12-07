module.exports = async function (context, req) {
  const date = "2024-12-07T06:16:27.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

