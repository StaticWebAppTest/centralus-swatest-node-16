module.exports = async function (context, req) {
  const date = "2023-07-15T14:08:07.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

