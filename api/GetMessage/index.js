module.exports = async function (context, req) {
  const date = "2024-08-16T18:14:19.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

