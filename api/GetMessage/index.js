module.exports = async function (context, req) {
  const date = "2023-06-11T11:06:53.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

