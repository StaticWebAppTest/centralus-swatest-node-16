module.exports = async function (context, req) {
  const date = "2023-04-25T00:48:06.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

