module.exports = async function (context, req) {
  const date = "2023-02-04T05:08:27.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

