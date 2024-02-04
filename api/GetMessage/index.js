module.exports = async function (context, req) {
  const date = "2024-02-04T15:07:38.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

