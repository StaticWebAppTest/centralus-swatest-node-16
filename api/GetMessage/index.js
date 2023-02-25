module.exports = async function (context, req) {
  const date = "2023-02-25T08:11:59.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

