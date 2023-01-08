module.exports = async function (context, req) {
  const date = "2023-01-08T11:07:10.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

