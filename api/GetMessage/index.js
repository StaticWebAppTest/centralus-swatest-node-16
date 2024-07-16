module.exports = async function (context, req) {
  const date = "2024-07-16T18:13:39.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

