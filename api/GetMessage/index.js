module.exports = async function (context, req) {
  const date = "2023-06-23T15:10:29.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

