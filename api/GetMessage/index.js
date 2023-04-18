module.exports = async function (context, req) {
  const date = "2023-04-18T08:11:54.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

