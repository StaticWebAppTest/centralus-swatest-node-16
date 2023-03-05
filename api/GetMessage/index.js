module.exports = async function (context, req) {
  const date = "2023-03-05T08:11:54.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

