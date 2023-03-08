module.exports = async function (context, req) {
  const date = "2023-03-08T06:13:19.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

