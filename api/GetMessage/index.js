module.exports = async function (context, req) {
  const date = "2023-02-01T08:12:32.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

