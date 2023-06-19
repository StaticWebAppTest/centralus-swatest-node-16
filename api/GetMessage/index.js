module.exports = async function (context, req) {
  const date = "2023-06-19T06:12:31.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

