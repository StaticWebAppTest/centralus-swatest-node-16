module.exports = async function (context, req) {
  const date = "2023-03-16T02:09:47.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

