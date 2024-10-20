module.exports = async function (context, req) {
  const date = "2024-10-20T14:10:44.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

