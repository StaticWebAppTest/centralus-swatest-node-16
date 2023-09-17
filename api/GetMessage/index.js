module.exports = async function (context, req) {
  const date = "2023-09-17T18:09:42.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

