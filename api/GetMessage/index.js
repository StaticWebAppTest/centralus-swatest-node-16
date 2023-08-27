module.exports = async function (context, req) {
  const date = "2023-08-27T08:09:56.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

