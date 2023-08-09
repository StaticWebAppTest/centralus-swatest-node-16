module.exports = async function (context, req) {
  const date = "2023-08-09T22:08:13.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

