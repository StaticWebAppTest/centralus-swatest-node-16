module.exports = async function (context, req) {
  const date = "2023-07-06T17:09:10.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

