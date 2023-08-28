module.exports = async function (context, req) {
  const date = "2023-08-28T09:08:57.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

