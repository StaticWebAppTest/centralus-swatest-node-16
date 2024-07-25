module.exports = async function (context, req) {
  const date = "2024-07-25T18:13:44.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

