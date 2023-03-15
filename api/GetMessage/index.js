module.exports = async function (context, req) {
  const date = "2023-03-15T09:10:18.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

