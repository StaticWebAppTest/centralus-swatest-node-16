module.exports = async function (context, req) {
  const date = "2024-06-12T22:10:12.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

