module.exports = async function (context, req) {
  const date = "2023-09-13T02:15:31.270Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

