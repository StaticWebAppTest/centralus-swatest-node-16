module.exports = async function (context, req) {
  const date = "2023-10-03T05:08:24.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

