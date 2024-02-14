module.exports = async function (context, req) {
  const date = "2024-02-14T07:10:09.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

