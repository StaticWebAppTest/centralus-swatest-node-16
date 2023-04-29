module.exports = async function (context, req) {
  const date = "2023-04-29T09:08:12.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

