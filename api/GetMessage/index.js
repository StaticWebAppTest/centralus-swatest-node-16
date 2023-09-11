module.exports = async function (context, req) {
  const date = "2023-09-11T02:15:49.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

