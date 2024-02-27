module.exports = async function (context, req) {
  const date = "2024-02-27T18:11:42.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

