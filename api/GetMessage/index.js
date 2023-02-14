module.exports = async function (context, req) {
  const date = "2023-02-14T12:19:42.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

