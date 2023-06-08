module.exports = async function (context, req) {
  const date = "2023-06-08T14:08:08.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

