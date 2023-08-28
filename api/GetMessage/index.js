module.exports = async function (context, req) {
  const date = "2023-08-28T01:42:04.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

