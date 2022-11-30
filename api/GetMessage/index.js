module.exports = async function (context, req) {
  const date = "2022-11-30T05:10:02.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

