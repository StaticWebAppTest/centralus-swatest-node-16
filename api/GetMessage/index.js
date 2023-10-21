module.exports = async function (context, req) {
  const date = "2023-10-21T22:07:21.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

