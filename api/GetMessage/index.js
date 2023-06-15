module.exports = async function (context, req) {
  const date = "2023-06-15T09:08:54.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

