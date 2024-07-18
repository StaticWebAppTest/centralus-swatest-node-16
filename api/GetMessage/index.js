module.exports = async function (context, req) {
  const date = "2024-07-18T17:10:20.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

