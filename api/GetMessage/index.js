module.exports = async function (context, req) {
  const date = "2024-09-12T10:12:33.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

