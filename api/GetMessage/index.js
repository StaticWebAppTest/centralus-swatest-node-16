module.exports = async function (context, req) {
  const date = "2024-11-29T18:16:27.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

