module.exports = async function (context, req) {
  const date = "2023-01-28T16:11:27.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

