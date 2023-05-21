module.exports = async function (context, req) {
  const date = "2023-05-21T06:10:39.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

