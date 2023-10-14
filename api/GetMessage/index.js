module.exports = async function (context, req) {
  const date = "2023-10-14T12:14:58.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

