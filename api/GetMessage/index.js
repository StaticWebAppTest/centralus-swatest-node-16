module.exports = async function (context, req) {
  const date = "2024-03-10T06:10:39.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

