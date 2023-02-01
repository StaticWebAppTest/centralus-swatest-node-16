module.exports = async function (context, req) {
  const date = "2023-02-01T16:12:19.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

