module.exports = async function (context, req) {
  const date = "2024-03-12T18:11:21.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

