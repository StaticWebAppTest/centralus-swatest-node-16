module.exports = async function (context, req) {
  const date = "2023-06-11T12:15:53.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

