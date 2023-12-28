module.exports = async function (context, req) {
  const date = "2023-12-28T21:07:55.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

