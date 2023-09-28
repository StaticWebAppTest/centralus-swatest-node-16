module.exports = async function (context, req) {
  const date = "2023-09-28T17:07:57.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

