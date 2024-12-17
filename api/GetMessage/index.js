module.exports = async function (context, req) {
  const date = "2024-12-17T12:24:58.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

