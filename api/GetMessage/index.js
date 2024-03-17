module.exports = async function (context, req) {
  const date = "2024-03-17T14:07:14.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

