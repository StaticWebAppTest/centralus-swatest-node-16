module.exports = async function (context, req) {
  const date = "2024-06-08T07:09:57.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

