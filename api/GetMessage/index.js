module.exports = async function (context, req) {
  const date = "2023-03-22T13:14:47.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

