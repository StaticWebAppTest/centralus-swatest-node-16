module.exports = async function (context, req) {
  const date = "2022-04-13T21:09:47.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

