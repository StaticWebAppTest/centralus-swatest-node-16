module.exports = async function (context, req) {
  const date = "2023-12-16T21:07:42.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

