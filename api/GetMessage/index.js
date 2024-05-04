module.exports = async function (context, req) {
  const date = "2024-05-04T23:09:43.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

