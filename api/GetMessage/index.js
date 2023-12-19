module.exports = async function (context, req) {
  const date = "2023-12-19T17:06:52.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

