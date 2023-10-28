module.exports = async function (context, req) {
  const date = "2023-10-28T21:06:53.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

