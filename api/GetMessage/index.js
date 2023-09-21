module.exports = async function (context, req) {
  const date = "2023-09-21T17:07:53.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

