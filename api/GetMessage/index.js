module.exports = async function (context, req) {
  const date = "2023-02-14T06:13:24.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

