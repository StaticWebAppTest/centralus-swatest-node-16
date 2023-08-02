module.exports = async function (context, req) {
  const date = "2023-08-02T09:08:52.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

