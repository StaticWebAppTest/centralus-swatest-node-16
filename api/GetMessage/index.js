module.exports = async function (context, req) {
  const date = "2023-12-04T11:08:12.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

