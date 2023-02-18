module.exports = async function (context, req) {
  const date = "2023-02-18T23:09:11.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

