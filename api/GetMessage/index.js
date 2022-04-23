module.exports = async function (context, req) {
  const date = "2022-04-23T16:14:10.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

