module.exports = async function (context, req) {
  const date = "2023-10-07T07:07:17.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

