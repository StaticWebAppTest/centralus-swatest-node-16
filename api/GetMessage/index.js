module.exports = async function (context, req) {
  const date = "2024-07-18T12:20:18.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

