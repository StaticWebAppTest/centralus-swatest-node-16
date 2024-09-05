module.exports = async function (context, req) {
  const date = "2024-09-05T15:11:27.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

