module.exports = async function (context, req) {
  const date = "2022-05-22T13:22:12.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

