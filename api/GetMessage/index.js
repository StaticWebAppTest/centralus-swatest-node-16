module.exports = async function (context, req) {
  const date = "2024-03-16T00:40:09.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

