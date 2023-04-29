module.exports = async function (context, req) {
  const date = "2023-04-29T10:08:21.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

