module.exports = async function (context, req) {
  const date = "2024-01-23T13:12:55.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

