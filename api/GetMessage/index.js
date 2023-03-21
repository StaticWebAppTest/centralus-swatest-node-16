module.exports = async function (context, req) {
  const date = "2023-03-21T14:07:42.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

