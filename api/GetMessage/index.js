module.exports = async function (context, req) {
  const date = "2023-04-16T09:08:07.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

