module.exports = async function (context, req) {
  const date = "2023-05-13T03:08:55.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

