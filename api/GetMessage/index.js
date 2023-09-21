module.exports = async function (context, req) {
  const date = "2023-09-21T10:09:46.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

