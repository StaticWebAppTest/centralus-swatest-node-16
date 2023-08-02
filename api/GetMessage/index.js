module.exports = async function (context, req) {
  const date = "2023-08-02T06:11:45.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

