module.exports = async function (context, req) {
  const date = "2024-06-08T05:09:42.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

