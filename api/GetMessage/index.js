module.exports = async function (context, req) {
  const date = "2022-09-10T23:11:36.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

