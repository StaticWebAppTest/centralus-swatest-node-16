module.exports = async function (context, req) {
  const date = "2023-02-04T10:09:12.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

