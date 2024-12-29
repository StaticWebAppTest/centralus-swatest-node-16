module.exports = async function (context, req) {
  const date = "2024-12-29T02:51:08.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

