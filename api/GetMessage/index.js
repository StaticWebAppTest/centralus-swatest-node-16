module.exports = async function (context, req) {
  const date = "2022-12-29T09:09:05.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

