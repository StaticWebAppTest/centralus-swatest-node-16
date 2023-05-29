module.exports = async function (context, req) {
  const date = "2023-05-29T20:09:06.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

