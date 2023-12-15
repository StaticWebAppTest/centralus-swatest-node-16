module.exports = async function (context, req) {
  const date = "2023-12-15T11:07:58.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

