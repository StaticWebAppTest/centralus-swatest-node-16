module.exports = async function (context, req) {
  const date = "2024-02-11T06:11:44.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

