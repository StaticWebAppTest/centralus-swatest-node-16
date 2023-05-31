module.exports = async function (context, req) {
  const date = "2023-05-31T09:09:37.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

