module.exports = async function (context, req) {
  const date = "2024-03-16T01:39:03.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

