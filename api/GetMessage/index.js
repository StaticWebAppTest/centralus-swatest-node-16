module.exports = async function (context, req) {
  const date = "2023-12-25T17:07:53.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

