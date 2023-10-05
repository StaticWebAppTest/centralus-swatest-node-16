module.exports = async function (context, req) {
  const date = "2023-10-05T21:07:40.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

