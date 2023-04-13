module.exports = async function (context, req) {
  const date = "2023-04-13T00:44:37.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

