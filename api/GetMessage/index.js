module.exports = async function (context, req) {
  const date = "2023-02-19T07:08:28.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

