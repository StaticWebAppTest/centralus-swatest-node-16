module.exports = async function (context, req) {
  const date = "2023-12-02T11:07:07.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

