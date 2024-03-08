module.exports = async function (context, req) {
  const date = "2024-03-08T06:11:43.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

