module.exports = async function (context, req) {
  const date = "2023-02-14T00:54:08.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

