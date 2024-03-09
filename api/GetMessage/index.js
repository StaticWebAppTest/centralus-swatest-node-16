module.exports = async function (context, req) {
  const date = "2024-03-09T18:10:22.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

