module.exports = async function (context, req) {
  const date = "2024-03-18T17:09:51.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

