module.exports = async function (context, req) {
  const date = "2023-10-25T21:07:36.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

