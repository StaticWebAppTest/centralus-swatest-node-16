module.exports = async function (context, req) {
  const date = "2022-10-26T07:13:38.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

