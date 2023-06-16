module.exports = async function (context, req) {
  const date = "2023-06-16T21:07:33.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

