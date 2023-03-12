module.exports = async function (context, req) {
  const date = "2023-03-12T02:18:47.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

