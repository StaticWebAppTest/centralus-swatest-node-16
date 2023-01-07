module.exports = async function (context, req) {
  const date = "2023-01-07T08:11:32.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

