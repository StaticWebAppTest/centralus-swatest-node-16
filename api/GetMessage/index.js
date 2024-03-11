module.exports = async function (context, req) {
  const date = "2024-03-11T16:10:53.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

