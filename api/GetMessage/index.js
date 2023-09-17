module.exports = async function (context, req) {
  const date = "2023-09-17T11:06:35.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

