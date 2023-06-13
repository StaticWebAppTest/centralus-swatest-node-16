module.exports = async function (context, req) {
  const date = "2023-06-13T15:08:56.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

