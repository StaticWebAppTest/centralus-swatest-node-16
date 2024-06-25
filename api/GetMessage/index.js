module.exports = async function (context, req) {
  const date = "2024-06-25T14:09:54.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

