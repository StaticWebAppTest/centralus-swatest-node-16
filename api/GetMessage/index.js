module.exports = async function (context, req) {
  const date = "2022-07-12T20:11:21.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

