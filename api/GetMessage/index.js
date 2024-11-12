module.exports = async function (context, req) {
  const date = "2024-11-12T18:15:24.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

