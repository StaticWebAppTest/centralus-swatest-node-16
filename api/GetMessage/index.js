module.exports = async function (context, req) {
  const date = "2023-02-04T20:09:19.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

