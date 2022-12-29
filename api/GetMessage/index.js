module.exports = async function (context, req) {
  const date = "2022-12-29T21:08:25.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

