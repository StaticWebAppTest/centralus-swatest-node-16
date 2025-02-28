module.exports = async function (context, req) {
  const date = "2025-02-28T10:13:05.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

