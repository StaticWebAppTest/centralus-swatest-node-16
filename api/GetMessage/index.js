module.exports = async function (context, req) {
  const date = "2022-12-21T23:09:22.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

