module.exports = async function (context, req) {
  const date = "2023-10-01T14:07:06.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

