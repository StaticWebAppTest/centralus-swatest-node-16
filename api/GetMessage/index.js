module.exports = async function (context, req) {
  const date = "2022-08-09T07:09:56.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

