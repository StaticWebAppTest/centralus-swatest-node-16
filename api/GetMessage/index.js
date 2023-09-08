module.exports = async function (context, req) {
  const date = "2023-09-08T10:09:10.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

