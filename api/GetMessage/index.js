module.exports = async function (context, req) {
  const date = "2024-11-18T14:11:57.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

