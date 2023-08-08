module.exports = async function (context, req) {
  const date = "2023-08-08T07:08:02.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

