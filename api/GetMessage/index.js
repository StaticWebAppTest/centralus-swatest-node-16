module.exports = async function (context, req) {
  const date = "2025-03-06T17:11:36.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

