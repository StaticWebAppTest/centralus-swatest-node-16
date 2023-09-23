module.exports = async function (context, req) {
  const date = "2023-09-23T21:06:44.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

