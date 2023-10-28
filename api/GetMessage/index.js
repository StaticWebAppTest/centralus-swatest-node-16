module.exports = async function (context, req) {
  const date = "2023-10-28T19:06:18.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

