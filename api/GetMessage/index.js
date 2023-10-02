module.exports = async function (context, req) {
  const date = "2023-10-02T06:12:12.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

