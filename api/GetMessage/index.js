module.exports = async function (context, req) {
  const date = "2024-02-04T06:10:42.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

