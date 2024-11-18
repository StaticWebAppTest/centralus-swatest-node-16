module.exports = async function (context, req) {
  const date = "2024-11-18T18:16:37.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

