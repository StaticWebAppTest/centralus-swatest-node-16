module.exports = async function (context, req) {
  const date = "2022-04-16T21:09:04.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

