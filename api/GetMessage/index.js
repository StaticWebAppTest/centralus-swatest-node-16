module.exports = async function (context, req) {
  const date = "2023-06-16T15:08:43.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

