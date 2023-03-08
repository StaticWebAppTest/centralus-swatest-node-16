module.exports = async function (context, req) {
  const date = "2023-03-08T23:10:23.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

