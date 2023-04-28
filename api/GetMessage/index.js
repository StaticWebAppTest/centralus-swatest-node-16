module.exports = async function (context, req) {
  const date = "2023-04-28T09:08:51.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

