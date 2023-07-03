module.exports = async function (context, req) {
  const date = "2023-07-03T07:09:24.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

