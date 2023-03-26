module.exports = async function (context, req) {
  const date = "2023-03-26T11:07:03.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

