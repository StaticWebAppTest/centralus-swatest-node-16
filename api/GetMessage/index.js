module.exports = async function (context, req) {
  const date = "2023-01-05T07:08:50.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

