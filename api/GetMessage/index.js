module.exports = async function (context, req) {
  const date = "2023-08-21T08:11:23.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

