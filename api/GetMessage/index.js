module.exports = async function (context, req) {
  const date = "2025-08-28T17:11:28.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

