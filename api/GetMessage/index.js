module.exports = async function (context, req) {
  const date = "2023-01-28T03:09:56.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

