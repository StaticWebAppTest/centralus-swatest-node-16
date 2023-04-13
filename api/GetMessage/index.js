module.exports = async function (context, req) {
  const date = "2023-04-13T02:29:53.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

