module.exports = async function (context, req) {
  const date = "2023-10-21T02:13:54.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

