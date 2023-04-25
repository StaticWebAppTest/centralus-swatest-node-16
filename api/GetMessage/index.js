module.exports = async function (context, req) {
  const date = "2023-04-25T21:07:53.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

