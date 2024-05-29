module.exports = async function (context, req) {
  const date = "2024-05-29T20:11:02.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

