module.exports = async function (context, req) {
  const date = "2023-10-23T17:07:31.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

