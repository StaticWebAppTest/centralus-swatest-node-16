module.exports = async function (context, req) {
  const date = "2024-10-08T15:12:22.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

