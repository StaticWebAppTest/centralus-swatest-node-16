module.exports = async function (context, req) {
  const date = "2022-12-11T11:07:42.936Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

