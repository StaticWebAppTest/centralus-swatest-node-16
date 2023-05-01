module.exports = async function (context, req) {
  const date = "2023-05-01T14:07:56.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

