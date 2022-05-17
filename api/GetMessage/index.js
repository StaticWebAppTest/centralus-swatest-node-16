module.exports = async function (context, req) {
  const date = "2022-05-17T12:22:05.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

