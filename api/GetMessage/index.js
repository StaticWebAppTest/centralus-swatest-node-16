module.exports = async function (context, req) {
  const date = "2024-07-17T07:11:05.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

