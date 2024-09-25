module.exports = async function (context, req) {
  const date = "2024-09-25T11:10:33.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

