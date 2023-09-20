module.exports = async function (context, req) {
  const date = "2023-09-20T11:07:38.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

