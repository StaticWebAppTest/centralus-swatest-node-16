module.exports = async function (context, req) {
  const date = "2023-12-08T08:12:35.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

