module.exports = async function (context, req) {
  const date = "2023-05-04T12:16:23.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

