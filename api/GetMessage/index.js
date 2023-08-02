module.exports = async function (context, req) {
  const date = "2023-08-02T17:07:55.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

