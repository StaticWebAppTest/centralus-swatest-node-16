module.exports = async function (context, req) {
  const date = "2024-02-11T07:09:10.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

