module.exports = async function (context, req) {
  const date = "2024-05-25T18:11:46.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

