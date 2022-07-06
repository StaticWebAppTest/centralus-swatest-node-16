module.exports = async function (context, req) {
  const date = "2022-07-06T16:15:21.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

