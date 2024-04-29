module.exports = async function (context, req) {
  const date = "2024-04-29T16:11:46.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

