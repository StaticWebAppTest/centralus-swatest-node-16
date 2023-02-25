module.exports = async function (context, req) {
  const date = "2023-02-25T23:09:32.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

