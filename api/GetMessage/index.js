module.exports = async function (context, req) {
  const date = "2023-08-18T04:10:19.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

