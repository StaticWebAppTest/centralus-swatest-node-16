module.exports = async function (context, req) {
  const date = "2024-09-13T16:13:02.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

