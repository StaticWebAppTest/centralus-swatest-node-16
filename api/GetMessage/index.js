module.exports = async function (context, req) {
  const date = "2023-02-23T23:10:33.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

