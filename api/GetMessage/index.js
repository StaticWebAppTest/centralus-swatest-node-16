module.exports = async function (context, req) {
  const date = "2024-03-16T08:10:47.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

