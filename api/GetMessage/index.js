module.exports = async function (context, req) {
  const date = "2023-05-16T00:47:42.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

