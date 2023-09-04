module.exports = async function (context, req) {
  const date = "2023-09-04T00:40:47.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

