module.exports = async function (context, req) {
  const date = "2025-03-28T04:15:28.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

