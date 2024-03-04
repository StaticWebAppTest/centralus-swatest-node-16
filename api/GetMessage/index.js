module.exports = async function (context, req) {
  const date = "2024-03-04T17:09:15.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

