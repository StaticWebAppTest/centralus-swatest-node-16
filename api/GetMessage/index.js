module.exports = async function (context, req) {
  const date = "2023-09-13T00:40:28.133Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

