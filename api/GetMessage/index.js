module.exports = async function (context, req) {
  const date = "2023-06-28T16:12:47.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

