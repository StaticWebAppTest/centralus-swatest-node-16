module.exports = async function (context, req) {
  const date = "2023-06-16T02:11:00.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

