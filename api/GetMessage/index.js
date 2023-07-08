module.exports = async function (context, req) {
  const date = "2023-07-08T09:08:55.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

