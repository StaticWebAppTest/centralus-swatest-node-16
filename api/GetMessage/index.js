module.exports = async function (context, req) {
  const date = "2023-11-06T09:09:53.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

