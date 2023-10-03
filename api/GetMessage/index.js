module.exports = async function (context, req) {
  const date = "2023-10-03T13:12:26.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

