module.exports = async function (context, req) {
  const date = "2023-03-18T09:08:37.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

