module.exports = async function (context, req) {
  const date = "2024-05-21T11:09:08.381Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

