module.exports = async function (context, req) {
  const date = "2023-04-10T05:08:56.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

