module.exports = async function (context, req) {
  const date = "2024-10-04T16:15:02.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

