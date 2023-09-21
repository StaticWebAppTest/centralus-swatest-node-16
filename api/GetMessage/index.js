module.exports = async function (context, req) {
  const date = "2023-09-21T09:09:00.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

